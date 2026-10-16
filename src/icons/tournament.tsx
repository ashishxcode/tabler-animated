"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M2 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M2 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3"}],["path",{"d":"M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2"}],["path",{"d":"M14 10h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[10,10],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,4],[20,10],[4,12],[4,20],[8,16],[16,10]]}];

export const TournamentIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TournamentIcon.displayName = "TournamentIcon";
