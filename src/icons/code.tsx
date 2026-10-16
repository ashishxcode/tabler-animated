"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8l-4 4l4 4"}],["path",{"d":"M17 8l4 4l-4 4"}],["path",{"d":"M14 4l-4 16"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[5,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,2],"o":[15.5,12],"d":[1.8,0]}];

export const CodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeIcon.displayName = "CodeIcon";
