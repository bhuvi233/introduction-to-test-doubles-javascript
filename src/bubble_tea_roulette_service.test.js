const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test.each`
  mockReturnType | expectedBubbleTea
  ${0.2} | ${'JASMINEMILKTEA'}
  ${0.6} | ${'PEACHICETEA'}
`("should generate '$expectedBubbleTea' bubble tea when the ramdom value is '$mockReturnType'", ({mockReturnType, $expectedBubbleTea}) => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('JASMINEMILKTEA');

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});
