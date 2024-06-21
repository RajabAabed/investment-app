import Input from "./Input";

export default function InputBoard({ handelChanges, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          name="Initial Investment"
          id="initial-investment"
          value={userInput.initialInvestment}
          changeHandeler={(e) =>
            handelChanges("initialInvestment", e.target.value)
          }
        />
        <Input
          name="Annual Investment"
          id="annual-investment"
          value={userInput.annualInvestment}
          changeHandeler={(e) =>
            handelChanges("annualInvestment", e.target.value)
          }
        />
      </div>
      <div className="input-group">
        <Input
          name="Expected Return"
          id="expected-return"
          value={userInput.expectedReturn}
          changeHandeler={(e) =>
            handelChanges("expectedReturn", e.target.value)
          }
        />
        <Input
          name="Duration"
          id="duration"
          value={userInput.duration}
          changeHandeler={(e) => handelChanges("duration", e.target.value)}
        />
      </div>
    </section>
  );
}
