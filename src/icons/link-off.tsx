"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15l3 -3m2 -2l1 -1"}],["path",{"d":"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"tilt","n":[0,1,3],"o":[12,12],"a":-12}];

export const LinkOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LinkOffIcon.displayName = "LinkOffIcon";
