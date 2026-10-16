"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 21l6 -5l6 5"}],["path",{"d":"M12 13v8"}],["path",{"d":"M8.238 8.264l-4.183 2.51c-1.02 .614 -1.357 1.898 -.76 2.906l.165 .28c.52 .88 1.624 1.266 2.605 .91l6.457 -2.34m2.907 -1.055l4.878 -1.77a1.023 1.023 0 0 0 .565 -1.455l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-6.016 3.61"}],["path",{"d":"M14 5l3 5.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"tilt","n":[0,1,2,3],"o":[12,12],"a":-8}];

export const TelescopeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TelescopeOffIcon.displayName = "TelescopeOffIcon";
