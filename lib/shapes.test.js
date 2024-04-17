const { generateSVG } = require('./shapes.js');

describe('generateSVG function', () => {
    it('should generate correct SVG content for a circle', () => {
        const svg = generateSVG('AB', '#FF5733', 'circle', "#C70039");
        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="#C70039"');
        expect(svg).toContain('>AB</text>');
    })
});