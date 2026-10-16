"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 3v4a.997 .997 0 0 0 1 1h4"}],["path",{"d":"M11 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5"}],["path",{"d":"M8 9h1"}],["path",{"d":"M8 12.994l3 0"}],["path",{"d":"M8 16.997l2 0"}],["path",{"d":"M21 15.994c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11,12],"a":0.08},{"fx":"draw","n":[0,2,3,4,5],"o":[14.5,12.5],"dl":0.15}];

export const FileTextShieldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTextShieldIcon.displayName = "FileTextShieldIcon";
