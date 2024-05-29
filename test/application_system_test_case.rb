require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  if ENV["CAPYBARA_SERVER_PORT"]
    Capybara.server_host = "rails-app"
    Capybara.server_port = ENV["CAPYBARA_SERVER_PORT"]

    driven_by :selenium, using: :headless_chrome, screen_size: [1400, 1400], options: {
      browser: :remote,
      url: "http://#{ENV["SELENIUM_HOST"]}:4444",
    }
  else
    driven_by :selenium, using: :chrome, screen_size: [1400, 1400]
  end
end
