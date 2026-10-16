"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.296 11.29a1 1 0 1 0 1.414 1.415"}],["path",{"d":"M8.473 8.456a5 5 0 1 0 7.076 7.066m1.365 -2.591a5 5 0 0 0 -5.807 -5.851"}],["path",{"d":"M15.9 20.11v.01"}],["path",{"d":"M19.04 17.61v.01"}],["path",{"d":"M20.77 14v.01"}],["path",{"d":"M20.77 10v.01"}],["path",{"d":"M19.04 6.39v.01"}],["path",{"d":"M15.9 3.89v.01"}],["path",{"d":"M12 3v.01"}],["path",{"d":"M8.1 3.89v.01"}],["path",{"d":"M4.96 6.39v.01"}],["path",{"d":"M3.23 10v.01"}],["path",{"d":"M3.23 14v.01"}],["path",{"d":"M4.96 17.61v.01"}],["path",{"d":"M8.1 20.11v.01"}],["path",{"d":"M12 21v.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[16],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2,3,4],"o":[18.34,17.06],"a":0.35,"dl":0.2},{"fx":"pop","n":[1],"a":0.25,"st":0.08,"os":[[12,12]]},{"fx":"pop","n":[0,5,6,7,8,9,10,11,12,13,14,15],"o":[12,12.01],"a":0.35,"dl":0.12}];

export const LivePhotoOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LivePhotoOffIcon.displayName = "LivePhotoOffIcon";
