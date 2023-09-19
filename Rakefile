#!/usr/bin/env rake
# frozen_string_literal: true

require "json"

task "default" => [:test]
desc "Runs the tests!"

task "test" do
  def valid_json?(json)
    JSON.parse(json)
    true
  rescue JSON::ParserError, TypeError => e
    false
  end

  # test if _site/feed.json is valid
  File.open("_site/feed.json", "r") do |f|
    json = f.read

    if valid_json?(json)
      puts "feed.json is valid"
    else
      puts "feed.json is not valid"
      exit 1
    end
  end
end
