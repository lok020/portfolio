import { render, screen } from '@testing-library/react';
import Header from '../Component/Header';

const page = "Home";

test('render Header.js with 0 category', () => {
    const { no_item } = render(<Header current_page={page} changePage={() => {}} header_selection_list={[]}/>);
    expect(no_item).toBeValid;
});

test('render Header.js with 100 categories', () => {
  function generateNthItemsInArray (n) {
    let result = [];
    while (n > 0){
      result.push(n);
      n--;
    }
    return result;
  }

  const list = generateNthItemsInArray(100);
  const [ array_last_item ] = list.slice(-1);

  render( <Header current_page={page} changePage={() => {}} header_selection_list={list}/> );
  const last_item = screen.getByText(array_last_item);
  expect(last_item).toBeInTheDocument();
});

test('render Header.js and display last item', () => {
  const list = [ "home", "about", "project", "contact" ];
  const [ array_last_item ] = list.slice(-1);

  function changePage (page_name, is_scroll) {
    this.setState({current_page: page_name});
    is_scroll && this.setState({scroll_page: true});
  }

  render( <Header current_page={page} changePage={changePage} header_selection_list={list}/> );
  const last_item = screen.getByText(array_last_item);
  expect(last_item).toBeInTheDocument();
});