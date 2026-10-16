"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8v-2c0 -.557 .228 -1.061 .595 -1.424"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2c.558 0 1.062 -.228 1.425 -.596"}],["path",{"d":"M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769"}],["path",{"d":"M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189"}],["path",{"d":"M8 10v4.5l4 2.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[17.71,19.7],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.3,6.29],[6,18],[18,6],[14,11.25],[12,12.25],[10,13.5]]}];

export const AugmentedRealityOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AugmentedRealityOffIcon.displayName = "AugmentedRealityOffIcon";
