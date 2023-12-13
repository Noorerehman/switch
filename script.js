function calculate_grade(percentage){
    switch (true){
        case percentage >= 90:
            return 'A';
        case percentage >= 80:
            return 'B';
        case percentage >= 70:
            return 'C';
        case percentage >= 60:
            return 'D';
        case percentage >= 50 :
            return 'E'; 
        default:
            return 'F';              
    }
}

let marks_percentage = prompt("enter your percentage of marks");
let percentage = parseFloat(marks_percentage);
let grade = calculate_grade(percentage);
console.log('YOUR GRADE IS' , grade)