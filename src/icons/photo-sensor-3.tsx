"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 4h1a2 2 0 0 1 2 2v1"}],["path",{"d":"M20 17v1a2 2 0 0 1 -2 2h-1"}],["path",{"d":"M7 20h-1a2 2 0 0 1 -2 -2v-1"}],["path",{"d":"M4 7v-1a2 2 0 0 1 2 -2h1"}],["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M12 18v2"}],["path",{"d":"M4 12h2"}],["path",{"d":"M12 4v2"}],["path",{"d":"M20 12h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,5,6,7,8],"o":[12,12],"a":0.35,"dl":0.12},{"fx":"tilt","n":[4],"o":[12,12],"a":-3}];

export const PhotoSensor3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoSensor3Icon.displayName = "PhotoSensor3Icon";
