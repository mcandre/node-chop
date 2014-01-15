Given(/^the program has finished$/) do
  @cucumber = `node example.js`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  lines.length.should == 7

  lines[0].should == 'Howdy'
  lines[1].should == 'Howdy!'
  lines[2 .. 3].join("\n").should == "Howdy!\n"
  lines[4].should == "Howdy!\r"
  lines[5].should == 'Howdy!'
  lines[6].should == 'Howdy!'
end
