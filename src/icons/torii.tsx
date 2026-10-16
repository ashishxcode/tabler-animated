"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 4c5.333 1.333 10.667 1.333 16 0"}],["path",{"d":"M4 8h16"}],["path",{"d":"M12 5v3"}],["path",{"d":"M18 4.5v15.5"}],["path",{"d":"M6 4.5v15.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6.5]]}];

export const ToriiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToriiIcon.displayName = "ToriiIcon";
