#!/usr/bin/env rake
# frozen_string_literal: true

require "json"
require "json-schema"

task "default" => [:test]
desc "Runs the tests!"

task "test" do
  # schema definition for _site/feed.json
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
          "required" => ["title", "lead", "content", "parameterized_name", "date_published"],
          "properties" => {
            "title" => { "type" => "string" },
            "lead" => { "type" => "string" },
            "content" => { "type" => "string" },
            "parameterized_name" => { "type" => "string" },
            "date_published" => { "type" => "string" },
            "delivery" => {
              "type" => ["object", "null"],
              "required" => ["method", "unit"],
              "properties" => {
                "method" => { "type" => "string" },
                "unit" => { "type" => "string" }
              }
            },
          }
        }]
      }
    }
  }

  begin
    raise "_site/feed.json was not found" unless File.exist?("_site/feed.json")

    JSON::Validator.validate!(es_offerings_site_feed_schema, "_site/feed.json")

    exit 0
  rescue JSON::Schema::ValidationError => e
    puts e.message

    exit 1
  rescue StandardError => e
    puts e.message

    exit 1
  end
end
