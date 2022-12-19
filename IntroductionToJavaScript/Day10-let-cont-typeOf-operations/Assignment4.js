let marks = Number(prompt('Enter the marks'));
switch(true) {
    case (marks >= 80 && marks <= 100): console.log('Grade A');
        break;

    case (marks >= 60 && marks < 80): console.log('Grade B');
        break;

    case (marks >= 40 && marks < 60): console.log('Grade C ');
        break;

    case (marks >= 20 && marks < 40): console.log('Grade D ');
        break;

    case (marks >= 0 && marks < 20): console.log('Grade E ');
        break;

    default: console.log('Invalid Number');
        break;
}