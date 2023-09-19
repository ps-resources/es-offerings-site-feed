#!/usr/bin/env rake
# frozen_string_literal: true

require "json"

task "default" => [:test]
desc "Runs the tests!"

task "test" do
  begin
    # test if _site/feed.json is valid
    File.open("_site/feed.json", "r") do |f|
      json = f.read

      # puts "Debug feed.json: #{json}"
      JSON.parse(json)
    end

    exit 0
  rescue StandardError => e
    puts e.inspect

    exit 1
  end
end
