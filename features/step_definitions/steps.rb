Given(/^the program has finished$/) do
  @cucumber = `npm test`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  lines.length.should == 11

  lines[-7].should == 'Howdy'
  lines[-6].should == 'Howdy!'
  lines[-5 .. -4].join("\n").should == "Howdy!\n"
  lines[-3].should == "Howdy!\r"
  lines[-2].should == 'Howdy!'
  lines[-1].should == 'Howdy!'
end
