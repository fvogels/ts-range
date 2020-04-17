export function range(from : number, until : number, step : number = 1) : number[]
{
    const result = [];

    if ( step > 0 )
    {
        for ( let i = from; i < until; i += step )
        {
            result.push(i);
        }
    }
    else if ( step < 0 )
    {
        for ( let i = from; i > until; i += step )
        {
            result.push(i);
        }
    }
    else
    {
        throw new Error('Step 0 is invalid');
    }

    return result;
}
