guard :shell do
  watch(/^.*\.js$/) do |m|
    title = 'Test'
    eager 'grunt test'
    status = ($?.success? && :success) || :failed
    n '', title, status
    ''
  end
end
