"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 5l0 14"}],["path",{"d":"M10 5l0 14"}],["path",{"d":"M14 5l0 14"}],["path",{"d":"M18 5l0 14"}],["path",{"d":"M3 17l18 -10"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,12],[10,12],[14,12],[18,12]]}];

export const TallymarksIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TallymarksIcon.displayName = "TallymarksIcon";
