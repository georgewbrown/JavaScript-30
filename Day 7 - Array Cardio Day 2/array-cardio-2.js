    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
    
    /*********************************************************/

    // Array.prototype.some() is at least one person 19 or older?
    /** My Solution
    const someNinteen = (person => person.year >= 1999) 
    console.log(people.some(someNinteen));
    */
    
    // Wes's Solution
      const isAdult = people.some(person => {
          const currentYear = (new Date()).getFullYear();
          return currentYear - person.year >= 19;
      })

      console.log(isAdult);

    /*********************************************************/

    /*********************************************************/

    // Array.prototype.every() // is everyone 19 or older?
    /** My Solution
     const everyNinteen = (person => person.year >= 1999) 
    console.log(people.every(everyNinteen));
    */

    // Wes's Solution
      const allAdults = people.some(person => {(new Date()).getFullYear() - person.year >= 19;})
      console.log(allAdults);

    /*********************************************************/

    /*********************************************************/

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    /** My Solution
     const findComment = comments.find(comment => comment.id === 823423);
    console.log(findComment)
    */


  
    /*********************************************************/

    /*********************************************************/

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    /** My Solution
     function findComment(comment) {
    return comment.id === 823423;
    }
    
    function deleteComment () {
    const commentIndex = comments.findIndex(findComment);
    comments.splice(commentIndex, 1)
    console.table(comments);
    }
    
    deleteComment();
    */

    // Wes's Solution
    const index = comments.findIndex(comment => comment.id === 823423)

    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];

    console.table(newComments);

    /*********************************************************/

