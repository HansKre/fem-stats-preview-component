import {useTheme} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';

type Limit = 'up' | 'down' | 'between' | 'only';

function useBreakPoint(limit: Limit, start: Breakpoint, end?: Breakpoint): boolean {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints[limit](start, end || start));
}

export default useBreakPoint
