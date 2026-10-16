"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M15.9 20.11l0 .01"}],["path",{"d":"M19.04 17.61l0 .01"}],["path",{"d":"M20.77 14l0 .01"}],["path",{"d":"M20.77 10l0 .01"}],["path",{"d":"M19.04 6.39l0 .01"}],["path",{"d":"M15.9 3.89l0 .01"}],["path",{"d":"M12 3l0 .01"}],["path",{"d":"M8.1 3.89l0 .01"}],["path",{"d":"M4.96 6.39l0 .01"}],["path",{"d":"M3.23 10l0 .01"}],["path",{"d":"M3.23 14l0 .01"}],["path",{"d":"M4.96 17.61l0 .01"}],["path",{"d":"M8.1 20.11l0 .01"}],["path",{"d":"M12 21l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"o":[12,12.01],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const LivePhotoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LivePhotoIcon.displayName = "LivePhotoIcon";
