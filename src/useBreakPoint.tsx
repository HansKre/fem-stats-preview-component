import {useTheme} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';

type Limit = 'up' | 'down' | 'between' | 'only';

function useBreakPoint(limit: Limit, breakpoint: Breakpoint): boolean {
    const theme = useTheme();
    const _limit = 'down'; // TODO: fixme
    return useMediaQuery(theme.breakpoints[_limit](breakpoint));
}

export default useBreakPoint
