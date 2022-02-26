const user = {email: 'rr@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce SyntaxError
  // eval('Hello World');

  // Produce a URIError
  // decodeURIComponent('%');

  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch (error) {
  // console.log(error);
  // console.log(error.message);
  // console.log(error.name);
  // console.log(error instanceof ReferenceError);
  // console.log(error instanceof TypeError);
  // console.log(`${error.name}: It's null stupid...`);

  console.log(`User Error: ${error.message}`);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues...');