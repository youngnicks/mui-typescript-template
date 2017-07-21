import { flattenedRoutes, getRoute } from '../index';

describe('routes', () => {
  describe('flattenedRoutes', () => {
    it('should be defined', () => {
      expect(flattenedRoutes).toBeDefined();
    });

    it('should be an array', () => {
      expect(flattenedRoutes).toBeInstanceOf(Array);
    });
  });

  describe('getRoute()', () => {
    it('should be defined', () => {
      expect(getRoute).toBeDefined();
    });

    it('should return children when available', () => {
      const childRoutes = [{title: 'Child Route'}];
      const parentRoute = {childRoutes};
      expect(getRoute(parentRoute)).toBe(childRoutes);
    });

    it('should return route when no children', () => {
      const route = {title: 'Test Route'};
      expect(getRoute(route)).toBe(route);
    });
  })
})