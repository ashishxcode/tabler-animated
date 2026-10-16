"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 4v4"}],["path",{"d":"M6 12v8"}],["path",{"d":"M13.823 15.176a2 2 0 1 0 -2.638 2.651"}],["path",{"d":"M12 4v10"}],["path",{"d":"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M18 4v1"}],["path",{"d":"M18 9v5"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"nudge","n":[0,1,3,5,6,7],"o":[12,10.91],"d":[2.2,0]},{"fx":"pop","n":[2,4],"o":[9,12],"a":0.04}];

export const AdjustmentsCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsCheckIcon.displayName = "AdjustmentsCheckIcon";
