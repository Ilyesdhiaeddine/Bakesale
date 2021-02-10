
export default {
  fetchInitialDeals = async () => {
    fetch('https://bakesaleforgood.com/api/deals')
      .then(response => response.json())
      .then(commits => alert(commits[0].author.login));
  };
}
