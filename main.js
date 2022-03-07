const singleNonTaxableIncome = 50000000
const marriageNonTaxableIncome = 60000000
const singleParentsNonTaxableIncome = 70000000


function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    let taxableIncome = annualIncome

    if (marriageStatus == "Lajang" && dependentChildrenCount >= 0) {
        taxableIncome = annualIncome - (singleNonTaxableIncome + dependentChildrenCount * 15000000)
    }
    if (marriageStatus == "Menikah" && dependentChildrenCount >= 0) {
        taxableIncome = annualIncome - (marriageNonTaxableIncome + dependentChildrenCount * 15000000)
    }
    if (marriageStatus == "Cerai" && dependentChildrenCount >=0) {
        taxableIncome = annualIncome - (singleParentsNonTaxableIncome + dependentChildrenCount * 15000000)
    }
    if(taxableIncome <= 0) {
        return 0
    }

    if (taxableIncome > 0 && taxableIncome <= 200000000) {
        taxableIncome *= .1
    }
    if (taxableIncome > 200000000 && taxableIncome <= 450000000) {
        taxableIncome *= .15
    }
    if (taxableIncome > 450000000) {
        taxableIncome *= .2
    }
    if(taxableIncome <= 0) {
        return 0
    }

    let taxIncome = taxableIncome

    return taxableIncome
    
}

console.log(calculateTax(2021, "YudhistiraErlandinata", 52000000, "marriage", 0))
console.log(calculateTax(2021, "YudhistiraErlandinata", 350000000, "singleParents", 12))
console.log(calculateTax(2021, "YudhistiraErlandinata", 600000000, "marriage", 2))