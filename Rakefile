#!/usr/bin/env rake
# frozen_string_literal: true

require "json"
require "json-schema"

task "default" => [:test]
desc "Runs the tests!"

task "test" do
  begin
    # test if _site/feed.json is valid
    File.open("_site/feed.json", "r") do |f|
      json = f.read
      

      # puts "Debug feed.json: #{json}"
      es_offerings_site_feed = JSON.parse(json)
      
      # validate the site feed
      es_offerings_site_feed_schema = {
        "type" => "object",
        "required" => ["version", "title", "feed_url", "expired", "items"],
        "properties" => {
          "version" => { "type" => "string" },
          "title" => { "type" => "string" },
          "feed_url" => { "type" => "string" },
          "expired" => { "type" => "bool" },
          "items" => {
            "type" => "array",
            "required" => true,
            "items" => [{
              "type" => "object",
              "required" => ["layout", "title", "delivery", "description", "parameterized_name"],
              "properties" => {
                "layout" => { "type" => "string" },
                "title" => { "type" => "string" },
                "delivery" => {
                  "type" => "object",
                  "required" => ["method", "unit"],
                  "properties" => {
                    "method" => { "type" => "string" },
                    "unit" => { "type" => "string" }
                  }
                },
                "description" => { "type" => "string" },
                "parameterized_name" => { "type" => "string" },
              }
            }]
          }
        }
      }
      
      JSON::Validator.validate(es_offerings_site_feed_schema, es_offerings_site_feed)
    end

    exit 0
  rescue Errno::ENOENT => e
    puts "_site/feed.json was not found"

    exit 1
  rescue JSON::Schema::ValidationError
    puts $!.message

    exit 1
  end
end
