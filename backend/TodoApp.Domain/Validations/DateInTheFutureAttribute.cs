using System.ComponentModel.DataAnnotations;

namespace TodoApp.Domain.Validations;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter, AllowMultiple = false)]
public class DateInFutureAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null) return ValidationResult.Success; // Null is allowed, validation succeeds.

        if (value is DateTime date)
        {
            if (date.Date >= DateTime.Now.Date)
            {
                return ValidationResult.Success; // Date is in the future, validation succeeds.
            }
        }

        return new ValidationResult("The date must be in the future.");
    }
}
