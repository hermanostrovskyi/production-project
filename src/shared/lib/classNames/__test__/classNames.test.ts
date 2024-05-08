import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    it('with first param ', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    it('with first param and array of params', () => {
        const expected = 'someClass test';
        expect(classNames('someClass', {}, ['test'])).toBe(expected);
    });

    it('with first param and object of params that are truthy', () => {
        const expected = 'someClass cls1 cls3';

        expect(classNames('someClass', { cls1: true, cls2: false, cls3: true }))
            .toBe(expected);
    });

    it('with mods undefined', () => {
        const expected = 'someClass cls1';

        expect(classNames('someClass', { cls1: true, cls2: undefined }))
            .toBe(expected);
    });

    it('with all options', () => {
        const expected = 'someClass cls1 cls3 test';

        expect(classNames('someClass', { cls1: true, cls2: false, cls3: true }, ['test']))
            .toBe(expected);
    });
});
