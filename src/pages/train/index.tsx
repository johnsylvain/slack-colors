import * as React from 'react';
import { Page } from '../../components/page';
import { ThemePreviewStack } from '../../components/theme-preview-stack';
import { Button } from '../../components/button';
import { Consumer } from '../../context';
import { IContextState } from '../../interfaces';

const ratings: any[] = [
  { value: 0, label: 'Hate it!' },
  { value: 0.33, label: 'Not the best.' },
  { value: 0.66, label: 'Pretty good.' },
  { value: 1, label: 'Love it!' }
];

export class Train extends React.Component {
  render() {
    return (
      <Consumer>
        {(state: IContextState) => (
          <Page>
            <ThemePreviewStack palettes={state.palettes} />
            {ratings.map((rating: any) => (
              <Button
                key={rating.label}
                onClick={() =>
                  state.dispatch({
                    type: 'CYCLE_THEMES',
                    payload: {
                      palette: state.palettes[0],
                      userRating: rating.value
                    }
                  })
                }
              >
                {rating.label}
              </Button>
            ))}
          </Page>
        )}
      </Consumer>
    );
  }
}
