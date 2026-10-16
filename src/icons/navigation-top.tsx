"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.54 19.977a.34 .34 0 0 0 .357 -.07a.33 .33 0 0 0 .084 -.35l-4.981 -10.557l-4.982 10.557a.33 .33 0 0 0 .084 .35a.34 .34 0 0 0 .357 .07l4.541 -1.477l4.54 1.477"}],["path",{"d":"M12 3v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,14.5],"a":0.08},{"fx":"pop","n":[1],"o":[12,4],"a":0.22,"dl":0.1}];

export const NavigationTopIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NavigationTopIcon.displayName = "NavigationTopIcon";
