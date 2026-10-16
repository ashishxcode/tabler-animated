"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 22v-2"}],["path",{"d":"M9 15l6 -6"}],["path",{"d":"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}],["path",{"d":"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"}],["path",{"d":"M20 17h2"}],["path",{"d":"M2 7h2"}],["path",{"d":"M7 2v2"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6],"o":[12,12],"a":-12}];

export const UnlinkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UnlinkIcon.displayName = "UnlinkIcon";
