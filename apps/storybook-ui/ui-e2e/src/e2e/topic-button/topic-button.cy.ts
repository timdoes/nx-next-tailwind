const ARGS = {
  topicName: 'GitHub',
  icon: 'FaGithub',
  href: 'https://github.com/timdoes',
};

describe('shared-ui: TopicButton component', () => {
  beforeEach(() => cy.visit(`/iframe.html?id=topicbutton--primary&${Object.entries(ARGS).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')}}`));

  it('should render the topic name', () => {
    cy.get('[data-testid=topicName]').should('contain', ARGS.topicName);
  });

  it('should render the topic icon', () => {
    cy.get('[data-testid=topicInnerWrap] > svg').should('be.visible');
  });

  it('should render Link with correct href property', () => {
    cy.get('[data-testid=topicLink]').should('have.attr', 'href', ARGS.href);
  })
});
