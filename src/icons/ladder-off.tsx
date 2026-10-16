"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 3v1m0 4v13"}],["path",{"d":"M16 3v9m0 4v5"}],["path",{"d":"M8 14h6"}],["path",{"d":"M8 10h2m4 0h2"}],["path",{"d":"M10 6h6"}],["path",{"d":"M8 18h8"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[8,12],[16,12],[11,14],[12,10],[13,6],[12,18]]}];

export const LadderOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LadderOffIcon.displayName = "LadderOffIcon";
