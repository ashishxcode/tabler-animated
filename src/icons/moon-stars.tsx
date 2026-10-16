"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"}],["path",{"d":"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"}],["path",{"d":"M19 11h2m-1 -1v2"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[11.66,11.99],"a":-14},{"fx":"pop","n":[1,2],"o":[18,8],"a":0.35,"dl":0.2}];

export const MoonStarsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoonStarsIcon.displayName = "MoonStarsIcon";
