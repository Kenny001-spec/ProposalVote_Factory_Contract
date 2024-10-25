import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProposalVoteFactoryModule = buildModule("ProposalVoteFactoryModule", (m) => {
  const proposalvote = m.contract("ProposalVoteFactory");
 
  return { proposalvote };
  
});

export default ProposalVoteFactoryModule;