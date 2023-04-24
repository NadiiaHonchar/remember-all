import { Component } from "react";

// =========================================
// With state mashine
// =========================================

export class PockemonInfo extends Component {
  state = {
    pockemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const { pockemonName } = this.props;
    if (prevProps.pockemonName !== pockemonName) {
      this.setState({ status: "pending" });
      fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonName}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(`There is no pokemon with the name ${pockemonName}`)
          );
        })
        .then((pockemon) => this.setState({ pockemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  render() {
    const { pockemon, error, status } = this.state;

    if (status === "idle") {
      return <div>Enter the Pokemon's name</div>;
    }

    if (status === "pending") {
      return <div>Loading...</div>;
    }

    if (status === "rejected") {
      return <div>{error.message}</div>;
    }

    if (status === "resolved") {
      return (
        <div>
          <p>{pockemon.name}</p>
          <img
            src={pockemon.sprites.other["official-artwork"].front_shiny}
            width={300}
            alt={pockemon.name}
          />
        </div>
      );
    }
  }
}

// =========================================
// Without state mashine
// =========================================

// export class PockemonInfo extends Component {
//   state = {
//     pockemon: null,
//     loading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { pockemonName } = this.props;
//     if (prevProps.pockemonName !== pockemonName) {
//       this.setState({ pockemon: null, loading: true });
//       fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonName}`)
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(
//             new Error(`There is no pokemon with the name ${pockemonName}`)
//           );
//         })
//         .then((pockemon) => this.setState({ pockemon }))
//         .catch((error) => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }
//   render() {
//     const { pockemon, loading, error } = this.state;
//     const { pockemonName } = this.props;
//     return (
//       <div>
//         {error && <div>{error.message}</div>}
//         {loading && <div>Loading...</div>}
//         {!pockemonName && <div>Enter the Pokemon's name</div>}
//         {pockemon && (
//           <div>
//             <p>{pockemon.name}</p>
//             <img
//               src={pockemon.sprites.other["official-artwork"].front_shiny}
//               width={300}
//               alt={pockemon.name}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
