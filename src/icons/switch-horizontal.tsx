"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 3l4 4l-4 4"}],["path",{"d":"M10 7l10 0"}],["path",{"d":"M8 13l-4 4l4 4"}],["path",{"d":"M4 17l9 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[15,7],"d":[-2.2,0]},{"fx":"nudge","n":[2,3],"o":[8.5,17],"d":[2.2,0]}];

export const SwitchHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwitchHorizontalIcon.displayName = "SwitchHorizontalIcon";
