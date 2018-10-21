var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {className: 'contactItem'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'https://cdn.pixabay.com/photo/2014/10/19/04/59/air-494020_1280.jpg'
          }),
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
          )
        )
      )
    },
  });