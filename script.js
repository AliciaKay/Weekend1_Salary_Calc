
$(document).ready(onReady);

var sumTotals = '';

function onReady() {
    $('#submit').on('click', submitFunc);
    $('#deleteRow').on('click', deleteRowFunc);
};

function submitFunc() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
    var monthlyCost = Math.round(annualSalary / 12);
    var markup = "<tr><td><input type='checkbox' name='record'></td><td>"+ firstName + "</td><td>" + lastName + "</td><td>" + idNumber + "</td><td>" + jobTitle + "</td><td>" + annualSalary + "</td><td class='toAdd'>" + monthlyCost + "</td></tr>";

    $('table tbody').append(markup);  

    $('#firstName').val(this.placeholder);
    $('#lastName').val(this.placeHolder);
    $('#idNumber').val(this.placeholder);
    $('#jobTitle').val(this.placeholder);
    $('#annualSalary').val(this.placeholder);

    sumTotals = Number(sumTotals += monthlyCost);

    $('#totalCell').html(sumTotals);

};

function deleteRowFunc() {
        $('table tbody').find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                sumTotals = Number(sumTotals -= this.monthlyCost)
                $('#totalCell').val(sumTotals);
                $(this).parents("tr").remove();
            }
        });
    };