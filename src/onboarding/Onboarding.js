import Link from 'next/link';
import { Button } from 'rmwc/Button';
import { Typography } from 'rmwc';

const Onboarding = () => {
  return (
    <div>
      <Typography use="headline4" tag="div" className="mx-4 my-4">
        Installation
      </Typography>
      <Typography use="body1" tag="div" className="mx-4">
        Minimal. This is a web app. Which means you can save it at your
        homescreen or bookmark it. Nothing else required.
      </Typography>

      <Typography use="headline4" tag="div" className="mx-4 my-4">
        Usage
      </Typography>

      <Typography use="subtitle1" tag="div" className="mx-4">
        How to use this app
      </Typography>

      <Typography use="body1" tag="div" className="mx-4">
        <ol>
          <li>
            Set your macro targets in{' '}
            <Link href="/calculator">
              <Button>Calculator</Button>
            </Link>{' '}
          </li>
          <li>
            In{' '}
            <Link href="/recipes">
              <Button theme="secondary">Recipes</Button>
            </Link>{' '}
            add 10 or more food recipes that you normally eat
          </li>
          <li>
            In{' '}
            <Link href="/plan">
              <Button>Meal Plan</Button>
            </Link>{' '}
            Click the generate button to randomly generate combinations of your
            recipes to hit your calories and macro goals per day
          </li>
        </ol>
      </Typography>
    </div>
  );
};

export default Onboarding;
