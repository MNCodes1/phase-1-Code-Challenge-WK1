function generateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else if (marks < 40) {
        return "E";
    }
}

    //Testing out
    console.log(generateGrade(86));
    console.log(generateGrade(76));
    console.log(generateGrade(52));
    console.log(generateGrade(45));
    console.log(generateGrade(30));