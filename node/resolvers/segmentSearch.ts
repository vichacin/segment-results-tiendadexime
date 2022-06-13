export const queries = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchSegment: async (_: unknown, args: SearchSegmentInput, __: Context) => {
    const key = 'category-1'
    if(args.isAuthenticated === true) {
      return [
        { key: key, value: '42' },
        { key: key, value: '90' }
      ]
    }
    return [
      { key: key, value: '1' },
      { key: key, value: '2' }
    ]
  }
}
