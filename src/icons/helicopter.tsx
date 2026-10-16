"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10l1 2h6"}],["path",{"d":"M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2"}],["path",{"d":"M13 9l0 -3"}],["path",{"d":"M5 6l15 0"}],["path",{"d":"M15 9.1v3.9h5.5"}],["path",{"d":"M15 19l0 -3"}],["path",{"d":"M19 19l-8 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3],"o":[13,11],"a":0.06},{"fx":"pop","n":[0,2,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,11],[13,7.5],[17.75,11.05],[15,17.5],[15,19]]}];

export const HelicopterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HelicopterIcon.displayName = "HelicopterIcon";
