import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {

    beforeEach(() => {
        // User enters information
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });

        // Updates state
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('has a text area that user can type in, click submit and return an empty text area', () => {

        // Checks the value of the prop is equal to above
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        // Simulates from submission
        wrapped.find('form').simulate('submit');

        // Updates states
        wrapped.update();
        
        // Ensures state is empty
        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });
});