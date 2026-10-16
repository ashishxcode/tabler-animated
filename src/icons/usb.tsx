"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 17v-11.5"}],["path",{"d":"M7 10v3l5 3"}],["path",{"d":"M12 14.5l5 -2v-2.5"}],["path",{"d":"M16 10h2v-2h-2l0 2"}],["path",{"d":"M6 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M10 5.5h4l-2 -2.5l-2 2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,11.25],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19],[9.5,13],[14.5,12.25],[17,9],[7,9],[12,4.25]]}];

export const UsbIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UsbIcon.displayName = "UsbIcon";
