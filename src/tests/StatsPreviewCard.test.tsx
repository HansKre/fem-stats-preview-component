import {render, screen} from '@testing-library/react';
import StatsPreviewCard from '../components/StatsPreviewCard';

describe('<StatsPreviewCard />', () => {
  it('should render header text', () => {
    render(<StatsPreviewCard />);
    expect(screen.getByText(/Get/i)).toBeInTheDocument();
    expect(screen.getByText(/insights/i)).toBeInTheDocument();
    expect(screen.getByText(/that help your business grow./i)).toBeInTheDocument();
  });
});
